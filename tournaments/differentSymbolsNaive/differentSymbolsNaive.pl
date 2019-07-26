#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub differentSymbolsNaive {
    my ($s) = @_;

    my @store = split('', $s);
    my %hash;

    foreach my $letter (@store) {
        $hash{$letter} = 0;
    }

    return scalar(keys(%hash));
}
