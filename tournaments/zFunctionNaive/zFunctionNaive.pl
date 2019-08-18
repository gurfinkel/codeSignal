#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub zFunctionNaive {
    my ($s) = @_;

    my @store = split('', $s);
    my $n = @store;
    my @result = (0)x$n;

    for (my $i = 0; $n > $i; ++$i) {
        for (my $j = $i; $n > $j; ++$j) {
            if ($store[$j] eq $store[$result[$i]]) {
                ++$result[$i];
            } else {
                last;
            }
        }
    }

    return \@result;
}
