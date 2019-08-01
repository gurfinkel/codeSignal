#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub extractMatrixColumn {
    my ($matrix, $column) = @_;

    my @result;

    for (my $i = 0; @$matrix > $i; ++$i) {
        push(@result, @{@$matrix[$i]}[$column]);
    }

    return \@result;
}
