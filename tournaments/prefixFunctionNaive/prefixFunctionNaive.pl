#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub prefixFunctionNaive {
    my ($s) = @_;

    my $n = length($s);
    my @store = split('', $s);
    my @result = (0)x$n;
    my $index = 1;
    my $lastPrefixLength = 0;

    while ($n > $index) {
        if ($store[$index] eq $store[$lastPrefixLength]) {
            $result[$index++] = ++$lastPrefixLength;
        } else {
            unless (0 != $lastPrefixLength) {
                $result[$index++] = $lastPrefixLength;
            } else {
                $lastPrefixLength = $result[$lastPrefixLength - 1];
            }
        }
    }

    return \@result;
}
