#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub differentSubstringsTrie {
    my ($inputString) = @_;

    my $n = length($inputString);
    my %store;

    for (my $i = 0; $n > $i; ++$i) {
        for (my $j = 1; $n >= $i + $j; ++$j) {
            $store{substr($inputString, $i, $j)} = 0;
        }
    }

    return scalar(keys(%store));
}
